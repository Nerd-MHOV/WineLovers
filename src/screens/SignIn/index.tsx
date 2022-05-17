import {
    View,
    Text,
    Image,
} from "react-native"

import {ButtonIcon} from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import {styles} from './styles';
import {useNavigation} from "@react-navigation/native";
import {Background} from "../../components/Background";


export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        // @ts-ignore
        navigation.navigate('Home');
    }

    return (
        <Background>
            <View style={styles.container}>


                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Aprecie {'\n'}
                        e organize suas {'\n'}
                        Adegas
                    </Text>

                    <Text style={styles.subtitle}>
                        De o real valor ao que importa, {'\n'}
                        não é apenas vinho!
                    </Text>

                    <ButtonIcon
                        title="Cadastra-se agora!"
                        activeOpacity={0.7}
                        onPress={handleSignIn}
                    />
                </View>

            </View>
        </Background>
    )
}