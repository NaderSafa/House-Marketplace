import googleIcon from '../assets/svg/googleIcon.svg'
import { useNavigate, useLocation } from 'react-router'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { db } from './../firebase.config'
import { getDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'

const OAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      // If user doesn't exist, Create new User
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        })
      }

      navigate('/')
    } catch (error) {
      toast.error("Couldn't authorize with google")
    }
  }

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'Up' : 'In'}</p>
      <button className='socialIconDiv' onClick={onGoogleClick}>
        <img src={googleIcon} alt='google' className='socialIconImg' />
      </button>
    </div>
  )
}

export default OAuth
