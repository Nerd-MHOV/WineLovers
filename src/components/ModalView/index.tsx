import {styles} from "./styles";
import {Modal, ModalProps, View, TouchableWithoutFeedback} from "react-native";
import {ReactNode} from "react";
import {Background} from "../Background";

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({children, closeModal, ...rest}: Props) {
    return (
        <Modal
            transparent={true}
            animationType={"slide"}
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar}/>
                            {children}
                        </Background>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}