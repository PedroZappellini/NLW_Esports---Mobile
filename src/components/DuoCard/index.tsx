import styles from "./styles";
import { TouchableOpacity, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import DuoInfo from "../DuoInfo";
import { THEME } from "../../theme";

export interface DuoCardProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVouceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVouceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVouceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <Entypo name="game-controller" color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DuoCard;
