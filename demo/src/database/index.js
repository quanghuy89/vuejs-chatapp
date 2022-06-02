import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const config = {
	apiKey: 'AIzaSyAfiMvR6cm5hzEgLNxbPT9JFoJL1tjPTOg',
	authDomain: 'chat-app-vue-a4229.firebaseapp.com',
	projectId: 'chat-app-vue-a4229',
	storageBucket: 'chat-app-vue-a4229.appspot.com',
	messagingSenderId: '347021807053',
	appId: '1:347021807053:web:d7218667955dd760d30884',
	measurementId: 'G-793N291Z9N'
}

initializeApp(config)

export const firestoreDb = getFirestore()
export const realtimeDb = getDatabase()
export const storage = getStorage()
