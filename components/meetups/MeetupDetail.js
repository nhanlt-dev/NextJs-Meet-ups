import React from "react";
import styled from "./MeetupDetail.module.css";
function MeetupDetail(props) {
  return (
    <section className={styled.meetup_detail}>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
