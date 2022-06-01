import {styles} from "./styles";
import {View, TouchableOpacity, TouchableOpacityProps, Text} from "react-native";

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import {categories} from "../../utils/categories";
import {GuildIcon} from "../GuildIcon";
import {theme} from "../../global/styles/theme";
import {GuildProps} from "../Guild";
import {LinearGradient} from "expo-linear-gradient";


export type  AppoitmentProps = {
    id: string,
    guild: GuildProps,
    category: string,
    date: string,
    description: string,
}

type Props = TouchableOpacityProps & {
    data: AppoitmentProps;
}

export function Appointment({data, ...rest}: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const {owner} = data.guild;
    const {primary, on} = theme.colors;

    return (
        <TouchableOpacity {...rest}>
            <View style={styles.container}>
                {/*<LinearGradient*/}
                {/*                colors={[theme.colors.secondary50, theme.colors.secondary70]}*/}
                {/*                style={styles.guildIconContainer}*/}
                {/*>*/}
                    <GuildIcon />
                {/*</LinearGradient>*/}
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>


                        <View style={styles.playerInfo}>
                            <PlayerSvg fill={owner ? primary : on} />

                            <Text style={[styles.player, {color: owner ? primary : on}]}>
                                {owner ? 'Adega 01' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}