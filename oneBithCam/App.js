import { 
  Text, 
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import styles from './style';
import { Camera } from 'expo-camera';
import { useEffect, useState, useRef } from 'react'
import { FontAwesome } from "@expo/vector-icons"

export default function App() {

  const camRef = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)
  const [capturedPhoto, setCapturedPhoto] = useState(null)

  //permissiom for use camera
  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted');
    })();
  }, [])

  if(hasPermission === null){
    return <View/>
  }
  if(hasPermission === false){
    return <Text>Acesso negado</Text>
  }

  //função que captura a imagem
  async function takePicture(){
    if (camRef){
      const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri)
      console.log(data);
    }
  }

  return (
    <SafeAreaView style={styles.initView}>
      <Camera
      style={styles.camera}
      type={type}
      >
        <View style={styles.buttonCam}>
          <TouchableOpacity
          style={styles.buttonFlip}
          onPress={() =>
            setType(
              type === Camera.Constants.Type.back 
              ? Camera.Constants.Type.front 
              : Camera.Constants.Type.back
            )}
          >
            <FontAwesome name="exchange" size={23} color={"red"}></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.buttonCamera}
          onPress={takePicture}>
            <FontAwesome name="camera" size={23} color="#fff"></FontAwesome>
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
}
