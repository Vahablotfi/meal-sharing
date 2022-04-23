import { createContext } from "react";
import React, { useEffect, useState } from "react";

export const GlobalContext = createContext();

// function GlobalState() {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     fetch("/api/meals")
//       .then((response) => response.json())
//       .then((data) => setMeals(data));
//   }, []);

//   console.log(meals.map((meal) => meal.title));
//   const mealTitle = meals.map((meal) => meal.title);
//   return <div>GlobalState</div>;
// }

// export default GlobalState;

export const GlobalProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [joinedMeals, setJoinedMeals] = useState([]);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);

  useEffect(() => {
    fetch("/api/joinedMeals")
      .then((response) => response.json())
      .then((data) => setJoinedMeals(data));
  }, []);

  return (
    <GlobalContext.Provider value={{ meals: meals, joinedMeals: joinedMeals }}>
      {children}
    </GlobalContext.Provider>
  );
};

/*



export const GlobalProvider = ({ children }) => {
   const [input,setInput]=useState('')
  const [users, setUsers] = useState({
    item: [],
    loading: false,
    error: '',
    emptyResult:false,
  })

  function searchUser(event) {
   return setInput(event.target.value)
  }

  useEffect(() => {
    const fetchData = () => {
      if (input !== "") {            
       setUsers({
         ...users, 
           loading : true,
        })
            fetch(`https://api.github.com/search/users?q=${input}`)
             .then(response => {
             if (!response.ok) {
            setUsers({
              ...users,
               loading: false,
               error: 'could not get the data from server',
                })
               throw Error("could not get the data from server")
            }
          const data = response.json();
          return data;
        })
         .then(data => {
                if (data.total_count === 0) {
                  setUsers({
                    ...users,
                    item: [],
                    emptyResult: true,
                  }
                  )
                } else {
                  setUsers({
                    item: data.items,
                    loading: false,
                     error: '',
                    emptyResult: false,
                  }
                 );
                }
        
        })
        .catch(err => {
          setUsers({
             item: [],
            loading: false,
            error: err.message,
            emptyResult: false,
          }
        )
      })
    }
  };
  fetchData()
},[input])


  return (
    <GlobalContext.Provider value={{
      users,
      input,
      searchUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
*/
