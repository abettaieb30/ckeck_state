import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
import './App.css';
class Profile extends Component {
    state= { 
        Person :{ fullName:'Amor Bettayeb',
        bio:'that`s me Amor an embedded systems enginner with big ambitions',
         imgSrc:'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/274556539_330068289058597_333604658038861097_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=cisVp2tb0a4AX-LCQUq&tn=Q2uBNdor2IOWzf1p&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-wmJUpeeZCD-ym1uPMYEkiGfu2XeLkwQD95bcd3faKYw&oe=62F6B197', profession:'Embedded Systems Engineer'} 
      }
      render() {
  return (
    <div>
      <div className='card'>
        <h1 className='item'>{this.state.Person.fullName}</h1>
        <h3 className='item'>{this.state.Person.profession}</h3>
        <h5 className='item'>{this.state.Person.bio}</h5>
        <img src={this.state.Person.imgSrc} alt="" className='mypic' />
        <div className='icons'>
       <SocialIcon url="https://twitter.com/jaketrent" />
       <SocialIcon url="https://facebook.com/jaketrent" />
       <SocialIcon url="https://linkedin.com/jaketrent" />
       <SocialIcon url="https://instagram.com/jaketrent" />
       <SocialIcon url="https://google.com/jaketrent" />
       <SocialIcon url="https://whatsapp.com/jaketrent" />
       </div>
      </div>
    </div>
  )
      }
}

export default Profile
