import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Snowflair() {
  const iosButton = () => {
    console.log("iosButton pressed");
  };
  const androidButton = () => {
    console.log("androidButton pressed");
  };
  return (
    <div className="Snowflair">
      <div className="projectName">Snowflair</div>
      <div>
        <div className="appIcon">
          <Image
            src={"/assets/appIcon.png"}
            alt="Snowflair"
            width={150}
            height={150}
          ></Image>
        </div>
        <button onClick={androidButton} className="androidButton">
          {" "}
          <Image
            src={"/assets/playStore.png"}
            alt="Snowflair"
            width={24}
            height={24}
          ></Image>
          <p>Google Playstore</p>
        </button>
      </div>
      <div>
        <button onClick={iosButton} className="iosButton">
          {" "}
          <Image
            src={"/assets/appStore.png"}
            alt="Snowflair"
            width={24}
            height={24}
          ></Image>
          <p>Apple Store</p>
        </button>
      </div>
      <div>
        <Link href="https://www.snowflair.com/" className="websiteButton">
          Go to our Website
        </Link>
      </div>
    </div>
  );
}
