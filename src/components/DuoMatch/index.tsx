import styles from "./styles";
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Heading from "../../components/Heading";
import * as Clipboard from "expo-clipboard";
import { THEME } from "../../theme";
import { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord copiado!",
      "Cole no Discord para encontrar este usuário."
    );
    setIsCopying(false);
  }

  return (
    <Modal animationType="fade" statusBarTranslucent transparent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <AntDesign
            name="checkcircleo"
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />
          <Heading
            style={{ alignItems: "center", marginTop: 24 }}
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            onPress={handleCopyDiscordToClipboard}
            style={styles.discordButton}
            disabled={isCopying}
          >
            <Text style={styles.discord}>
              {isCopying ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default DuoMatch;
