import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { appid, secret } from '../helper';




function Room() {
    const { roomid } = useParams();
    //    console.log(roomid);

    //room reference
    const myLiveStream = async (element) => {

        // generate Kit Token
        const appID = appid;
        const serverSecret = secret;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), "CSMS-LIVESTREAM");

      //create instance for live room
      const zc = ZegoUIKitPrebuilt.create(kitToken);

      // join room function
      zc.joinRoom({
        container: element,
        sharedLinks: [
            {
                name: "Copy Link",
                // url: `http://localhost:3000/room/${roomid}`
                url: `https://661f73777b1026ebca00243e--csms-livestream.netlify.app/`

            }
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
        //   config: {
        //     role,
        //   },
        },
        showScreenSharingButton : true,
        // sharedLinks,
      });

    }
    return (
        <div>
           <div ref = {myLiveStream}/>
        </div>
    )
}

export default Room