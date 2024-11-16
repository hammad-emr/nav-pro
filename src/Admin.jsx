import React from 'react';

const Admin = ({currentuser}) => {
  return (
    currentuser==="admin"?
    <div>
      <h1>Admin</h1>
      <p className='para-new'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      </div>
    : <div><b>You are not authorised</b></div>
  );
}

export default Admin;
