import {styles} from "./styles";
import {View, FlatList} from "react-native";
import {Guild, GuildProps} from "../../components/Guild";
import {ListDivider} from "../../components/ListDivider";

type Props ={
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                        <Guild
                            data={item}
                            onPress={() => handleGuildSelect(item)}
                        />
                    )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                listHeaderComponent={() => <ListDivider isCentered />}
                style={styles.guilds}
                contentContainerStyle={{paddingBottom:68, paddingTop: 103}}
            />
        </View>
    )
}