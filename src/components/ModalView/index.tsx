import {styles} from "./styles";
import {Modal, ModalProps, View} from "react-native";
import {ReactNode} from "react";
import {Background} from "../Background";

type Props = ModalProps & {
    children: ReactNode;
}

export function ModalView({children, ...rest}: Props) {
    return(
        <Modal
            transparent={true}
            animationType={"slide"}
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar} />
                        {children}
                    </Background>
                </View>

            </View>
        </Modal>
    )
}