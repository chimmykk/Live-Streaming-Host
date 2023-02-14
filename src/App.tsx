import React from "react";
import { useState } from "react";
import AgoraUIKit, { type PropsInterface, layout } from "agora-react-uikit";



const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(false);
  const [isPinned, setPinned] = useState(false);

  const props: PropsInterface = {
    rtcProps: {
      appId: "c4d6e23287ed4da6b6831383945f9ed2",
      channel: "test",
      role: isHost ? "host" : "audience",
      layout: isPinned ? layout.pin : layout.grid,
    },
    callbacks: {
      EndCall: () => setVideocall(false),
    },
    styleProps: {
      localBtnContainer: { backgroundColor: "blue" },
    },
  };

  return (
    <div style={styles.container}>
      {videocall ? (
        <>
          <h2 style={styles.heading}>
            You're{" "}
            <span style={styles.person}>
              {isHost ? "a host" : "an audience"}
            </span>
          </h2>
           
            {/* <h2 style={styles.liveStatus}> Live now</h2> */}
          
          <section style={styles.videoSection}>
            <AgoraUIKit
            rtcProps={props.rtcProps}
            callbacks={props.callbacks}
            styleProps={props.styleProps}
          />
          <form style={styles.comment}>Add a comment</form>
</section>
          <div style={styles.nav}>
            <button style={styles.btn} onClick={() => setHost(!isHost)}>
              Change Role
            </button>
            <button style={styles.btn} onClick={() => setPinned(!isPinned)}>
              Change Layout
            </button>
          </div>
        </>
      ) : (
        <button style={styles.solidBtn} onClick={() => setVideocall(true)}>
          Start Call
        </button>
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "grid",
    backgroundColor: "#007bff22",
    marginInline: "auto",
    height: "100vh",
    gridAutoRows: "auto 1fr auto",
    maxWidth: 400,
  },

  // liveStatus: {
  // color:"white",
  // display:"flex",
  // borderRadius:"3px",
  // marginLeft:"350px",
  // padding:"8px",
  // flex:5,
  // position:"absolute",
  // marginTop:"30px",
  // width: "fit-content",
  // background:"linear-gradient(87deg, #833ab4, #e1366c,#fd1d1d)"
    
  // },


  
  comment: {
    border: "1px solid white",
    padding: "30px",
    borderRadius: "30px",
    position: "absolute",
    bottom: "65px",
    marginInline: "10px",
    color: "white",
    width: "80%",
    height:"5px",
    display: "flex"
  },
  heading: { textAlign: "center", fontWeight: 500, fontSize: 20 },
  person: { fontWeight: "bold" },
  videoSection: {
    display: "flex",
    position: "relative",
  },
  videoContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    padding: 10,
  },
  solidBtn: {
    placeSelf: "center",
    backgroundColor: "pink",
    color: "black",
    outlineColor: "transparent",
    border: "1px solid white",
    fontSize: 20,
    borderRadius: 5,
    padding: 10
  },
  btn: {
    outlineColor: "transparent",
    backgroundColor: "pink",
    borderRadius: 5,
    flex: 1,
    padding: 10,
    color: "black",
    fontSize: 20,
  },
};

export default App;
