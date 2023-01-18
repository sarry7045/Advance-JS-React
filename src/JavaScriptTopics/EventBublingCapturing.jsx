import React from "react";
// import "../App.css";
const EventBublingCapturing = () => {
  // In situations me kisi chlild div ko click krne k baad parent div ka event bhi cal ho jata hai soo usse unessary calls hote hai,
  // soo ussi chiz ko rokne k liye hum event.stopPropagation

  document.querySelector("#grandparent");
  document.addEventListener(
    "click",
    () => {
      console.log("Gransparent Clicked");
    },
    true
  ); //capturing

  document.querySelector("#parent");
  document.addEventListener(
    "click",
    (e) => {
        console.log("Parent Clicked");
        e.stopPropagation()
    },
    false
  ); //bubbling

  document.querySelector("#child");
  document.addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    true
  ); //capturing
  return (
    <>
      <div id="grandparent">
        <div id="parent">
          <div id="child">
            <h4>EventBublingCapturing</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBublingCapturing;