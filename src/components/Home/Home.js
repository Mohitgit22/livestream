import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [roomId, setRoomID] = useState();
    const navigate = useNavigate();//useNavigate Hook
    const handleJoin = () => {
        navigate(`/room/${roomId}`)
    }
    // return (
    //     <div>
    //         <div>
    //             Sports
    //             <div>
    //                 <ul>
    //                     <li>Cricket  - A</li>
    //                     <li>Football - B</li>
    //                     <li>Chess    - C</li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <input type='text' placeholder='Enter Room Id or Sports Room Id' value={roomId} onChange={e => {
    //            setRoomID(e.target.value)
    //         }} />
    //         <button onClick={handleJoin}>Join</button>
    //     </div>
    // )
    return (
  
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full px-4 py-8 bg-white rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold">Sports</h1>
                    <ul className="mt-4">
                        <li>Cricket - A</li>
                        <li>Football - B</li>
                        <li>Chess - C</li>
                    </ul>
                </div>
                <input
                    type='text'
                    placeholder='Enter Room Id or Sports Room Id'
                    value={roomId}
                    onChange={e => setRoomID(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                />
                <button onClick={handleJoin} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Join
                </button>
            </div>
        </div>
      
    );
}

export default Home