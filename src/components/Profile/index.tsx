import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.conteiner}>

            <Avatar 
                urlImage="https://github.com/nerd-mhov.png"
            />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Matheus
                    </Text>
                </View>

                <Text style={styles.message}>
                    É dia de um bom vinho!
                </Text>
            </View>

        </View>
    )
}