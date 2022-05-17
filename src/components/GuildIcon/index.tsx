import {styles} from "./styles";
import {Image} from "react-native";

export function GuildIcon(){
    const uri = "https://www.flaticon.com/br/premium-icon/icons/svg/3447/3447716.svg"
    return(
        <Image
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
        />
    )
}