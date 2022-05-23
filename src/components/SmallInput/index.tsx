import {styles} from "./styles";
import {TextInput, TextInputProps, View} from "react-native";

export function SmallInput({...rest}: TextInputProps) {
    return(
        <TextInput style={styles.container}
                   keyboardType={"numeric"}
                   {...rest}
        />
    )
}