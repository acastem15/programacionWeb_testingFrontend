import { useState } from "react";

function Like(){
    const [likes, setLikes] = useState(0);
    const handleIncrement = () => {
        setLikes(likes + 1)
    };
    
    const handleDecrement = () => {
        setLikes(likes - 1)
    };

    return (
        <div>
          <p>Likes: {likes}</p>
          <button data-testid="increment" onClick={handleIncrement}>
            Like
          </button>
          <button data-testid="decrement" onClick={handleDecrement}>
            {" "}
            Dislike
          </button>
        </div>
      );
}

export default Like;
