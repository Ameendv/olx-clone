import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context'
import { useHistory } from 'react-router-dom';
const Create = () => {
  const { Firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const history=useHistory()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const date = new Date()

  const handleSubmit = (e) => {
    Firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url)
        Firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        })
        history.push('/')
      })
    })
  }


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : null}></img>

          <br />
          <input type="file" onChange={(e) => {
            setImage(e.target.files[0])
          }} />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
