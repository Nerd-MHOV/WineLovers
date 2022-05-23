import {TouchableOpacity, View, ImageBackground, Text, FlatList} from "react-native";
import {Fontisto} from '@expo/vector-icons';
import {Background} from "../../components/Background";
import {ListHeader} from "../../components/ListHeader";
import {ListDivider} from "../../components/ListDivider";
import {Header} from "../../components/Header";
import {theme} from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png';
import {styles} from "./styles";
import {Member} from "../../components/Member";
import {ButtonIcon} from "../../components/ButtonIcon";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'online',
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline',
        }
    ]

    return(
        <Background>
            <Header title={"Detalhes"} action={<TouchableOpacity>
                <Fontisto name={"share"} size={24} color={theme.colors.primary} />
            </TouchableOpacity>}/>

            <ImageBackground source={BannerImg} styles={styles.banner}>
                <View style={styles.bannerContent}>
                <Text style={styles.title}>Lendários</Text>
                <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                </View>
            </ImageBackground>

            <View style={styles.topics}>
                <ListHeader title={"Jogadores"} subtitle={"Total 3"} />
            </View>

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon title={"Entrar na partida"} />
            </View>
        </Background>


    )
}