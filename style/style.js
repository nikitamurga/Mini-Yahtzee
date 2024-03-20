import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#87CEEB',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 25,
    backgroundColor: '#87CEEB',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    margin: 15,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 17,
    textAlign: 'center',
    margin: 15,
  },
  gameboard: {
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    margin: 15
  },
  row: {
    margin: 25,
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 35,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#00BFFF",
    width: 160,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#305973",
    fontSize: 22
  }
});
