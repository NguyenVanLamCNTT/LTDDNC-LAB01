import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function WelcomeView()  {
    return (
        <View style={styles.containerWelcome}>
           <Image
                style={styles.logo}
                source={{
                uri: 'https://res.cloudinary.com/awi-ln/image/upload/v1663300488/circle_y3hoxr.png',
                }}
            />
            <Text 
                style={styles.title}>
                    GROW YOUR BUSINESS
            </Text>
            <Text style={styles.text}>
                We will help you to grow your business using {"\n"}
                online server
            </Text>
            <View style={styles.btnAuth}>
                <Button
                    style={styles.btnItem}
                    title="Register"
                />
                 <Button
                    style={styles.btnItem}
                    title="Login"
                />
            </View>        
        </View>
    )
}

const styles = StyleSheet.create({
    containerWelcome: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
      width: 150,
      height: 150,
      justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 30,
        textAlign: "center"
    },
    text: {
        marginTop: 30,
        textAlign: "center"
    },
    btnAuth: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf:'stretch'
    }
  });