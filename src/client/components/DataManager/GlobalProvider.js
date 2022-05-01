import { createContext } from "react";
import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

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
  // const [joinedMeals, setJoinedMeals] = useState([]);
  // const [meals, setMeals] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("/api/meals")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error("something went wrong please try again later!");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMeals(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setError(error.message);
  //       console.log(error.message);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("/api/joinedMeals")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw error("something went wrong please try again later!");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setJoinedMeals(data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);
  const { data: meals } = useFetch("/api/meals");
  const { data: joinedMeals } = useFetch("/api/joinedMeals");
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
