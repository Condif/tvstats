import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../../smallcomponent/dropdown/Dropdown";
import DivComponent from "../../smallcomponent/listitem/DivComponent";
import Button from "../../smallcomponent/button/Button"

const GenreContent = () => {

  // from react-redux
  // const programQuery = useSelector(state => state.programQuery)
  // const dispatch = useDispatch()


  const [openGenreDropdown, setOpenGenreDropdown] = useState(false);
  const [genreDropdownHeader, setGenreDropdownHeader] = useState("Välj Genre");
  const [genreList, setGenreList] = useState([
    {
      id: 0,
      title: "None",
      selected: false,
      key: "genre",
    },
    {
      id: 1,
      title: "Drama",
      selected: false,
      key: "genre",
    },
    {
      id: 2,
      title: "Skräck",
      selected: false,
      key: "genre",
    },
  ]);
  const [openTestDropdown, setOpenTestDropdown] = useState(false);
  const [testDropdownHeader, setTestDropdownHeader] = useState("Välj Test");
  const [testList, setTestList] = useState([
    {
      id: 0,
      title: "None",
      selected: false,
      key: "test",
    },
    {
      id: 1,
      title: "Test2",
      selected: false,
      key: "test",
    },
    {
      id: 2,
      title: "Test3",
      selected: false,
      key: "test",
    },
  ]);

  // addGenre
  const [searchTags, setSearchTags] = useState([])
  const addGenre = () => {
    const temp = [...searchTags]
    testList.forEach(element => {
      if(element.selected) {
        temp.splice(0, 1, element.title)
      }
    });
    genreList.forEach(element => {
      if(element.selected) {
        temp.splice(1, 1, element.title)
      }
    });

    setSearchTags(temp)
    console.log("genre tillagd");
  }

  useEffect(() => {
    console.log(searchTags);
  }, [searchTags])


  return (
    <div className="GenreContent">
      <div className="row1">
        <DivComponent
          container={"FlexStart Absolute MarginLeft MarginTop"}
          componentAmount={3}
          component1={
            <Dropdown
              openDropdown={openGenreDropdown}
              list={genreList}
              setList={setGenreList}
              setOpenDropdown={setOpenGenreDropdown}
              setHeader={setGenreDropdownHeader}
              headerTitle={genreDropdownHeader}
            />
          }
          component2={
            <Dropdown
              openDropdown={openTestDropdown}
              list={testList}
              setList={setTestList}
              setOpenDropdown={setOpenTestDropdown}
              setHeader={setTestDropdownHeader}
              headerTitle={testDropdownHeader}
            />
          }
         
        />
      </div>
      
      <div className="row2">
          <Button method1={addGenre} containerStyles={"Button marginLeft"} buttonStyles="green" buttonText="Lägg till"/>
      </div>
    </div>
  );
};

export default GenreContent;
