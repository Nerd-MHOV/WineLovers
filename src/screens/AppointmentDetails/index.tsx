import {TouchableOpacity, View} from "react-native";
import {Fontisto} from '@expo/vector-icons';
import {Background} from "../../components/Background";
import {Header} from "../../components/Header";
import {theme} from "../../global/styles/theme";

export function AppointmentDetails() {
    return(
        <Background>
            <Header title={"Detalhes"} action={<TouchableOpacity>
                <Fontisto name={"share"} size={24} color={theme.colors.primary} />
            </TouchableOpacity>}/>
        </Background>
    )
}