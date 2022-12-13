import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    initView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: "100%",
        height: "100%",
    },
    buttonCam: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    buttonFlip: {
        position: "absolute",
        bottom : 50,
        left: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    buttonCamera: {
        position: "absolute",
        bottom : 50,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 50,
    }
})

export default styles;