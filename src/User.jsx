import React from 'react';

const User = ({ currentuser }) => {
  return (
    currentuser === "admin" || currentuser === "registered" ?
    <div>
      <h1>User</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi rem odit esse dolor minus optio consequatur qui quasi earum, officiis dignissimos temporibus ducimus voluptates nihil odio velit corrupti sequi?</p>
    </div>
    :
    <div><b>You cannot access this page</b></div>
  );
}

export default User;
