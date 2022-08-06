// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import CheckBox from "./CheckBox";
// import CreateDiscInput from "./CreateDiscInput";
// import StarterPrompt from "./StarterPrompt";
// import PostInspiration from "./PostInspiration";
// import { ScoreSettings } from "./ScoreSettings";
// import SavedSettingsTemplate from "./SavedSettingsTemplate";
// import Calendar from "./Calendar";
// import CalendarTemp from "./CalendarTemp";
// import AllPostInspirations from "./AllPostInspirations";
// import { AllSynthInspirations } from "./AllSynthInspirations";
// import AllRespondingInspiration from "./AllRespondingInspiration";
// import dynamic from "next/dynamic";
// import {
//   EditorState,
//   convertToRaw,
//   ContentState,
//   convertFromHTML,
// } from "draft-js";
// import draftToHtml from "draftjs-to-html";
// import styles from "@/styles/createDisc.module.css";
// import {
//   PostingInspirations,
//   RespondingInspirations,
//   SynthesizingInspirations,
// } from "@/utils/sampleData";
// import NewSettings from "./NewSettings";
// const Editor = dynamic(
//   import("react-draft-wysiwyg").then((mod) => mod.Editor),
//   {
//     ssr: false,
//   }
// );

// const CreateDiscussions = ({ setOpenModal }) => {
//   const [editorState, setEditorState] = useState(
//     EditorState.createWithContent(
//       ContentState.createFromBlockArray(
//         convertFromHTML(
//           "<p>For this discussion, we are going to explore ______</p>"
//         )
//       )
//     )
//   );

//   const [allDiscussionNames, setAllDiscussionNames] = useState([]);
//   const [showInput, setShowInput] = useState("true");
//   const [discussionName, setDiscussionName] = useState("");
//   const [activeInspiration, setActiveInspiration] = useState("posting");
//   const [previewSettings, setPreviewSettings] = useState(true);
//   const [activeSetting, setActiveSettings] = useState("StarterPrompt");
//   const [starterPromptValue, setStarterPromptValue] = useState("");
//   const [viewInspirations, setViewInspirations] = useState(false);
//   const [activeViewInspiration, setActiveViewInspiration] = useState("");
//   const [checkedDiscussions, setCheckedDiscussion] = useState([]);
//   const [activeDetailedInsp, setActiveDetailedInsp] = useState("");
//   const [showDetailedInsp, setShowDetailedInsp] = useState(false);
//   const [addInspirationToSettings, setAddInspirationToSettings] =
//     useState(true);
//   const [addScoresToSettings, setAddScoresToSettings] = useState(true);
//   const [addCalendarToSettings, setAddCalendarToSettings] = useState(true);
//   const [selectedScoringOption, setSelectedScoringOption] =
//     useState("automatic");

//   const today = new Date();
//   let tommorrow = new Date();
//   tommorrow.setDate(today.getDate() + 1);
//   const [date, setDate] = useState([today, tommorrow]);

//   const handleAddDiscussion = (e) => {
//     e.preventDefault();
//     console.log(discussionName);
//     if (discussionName === "") {
//     } else {
//       const newDisc = {
//         // id: 1,
//         title: discussionName,
//         checked: true,
//       };
//       setAllDiscussionNames([...allDiscussionNames, newDisc]);
//       setCheckedDiscussion([...checkedDiscussions, newDisc]);
//       setShowInput(false);
//     }
//     setDiscussionName("");
//   };

//   const handleCheckDisc = (title) => {
//     console.log(title);
//     const updatedDiscussions = allDiscussionNames.map((disc) => {
//       console.log(title);
//       console.log(disc.title);
//       if (title == disc.title) {
//         return {
//           ...disc,
//           checked: !disc.checked,
//         };
//       } else {
//         return disc;
//       }
//     });

//     setAllDiscussionNames(updatedDiscussions);
//   };
//   console.log(allDiscussionNames);

//   useEffect(() => {
//     const filteredCheckedDiscussions = allDiscussionNames.filter(
//       (disc) => disc.checked == true
//     );
//     console.log(filteredCheckedDiscussions);
//     setCheckedDiscussion(filteredCheckedDiscussions);
//   }, [allDiscussionNames]);

//   const onEditorStateChange = (editorState) => {
//     setEditorState(editorState);
//     const textValue = draftToHtml(
//       convertToRaw(editorState.getCurrentContent())
//     );

//     setStarterPromptValue(textValue);
//   };
//   const AllSpreadInspiration = [
//     ...PostingInspirations,
//     ...RespondingInspirations,
//     ...SynthesizingInspirations,
//   ];
//   console.log(selectedScoringOption);
//   return (
//     <div className=" absolute grid place-items-center w-full h-screen top-0 left-0 z-9999 animate-fade-in vp-600:px-20 vp-980:hidden  ">
//       <div
//         className={`w-890 h-500 border-other-disabled   bg-white-white rounded-md  shadow-createDiscussion relative overflow-hidden flex justify-between `}
//       >
//         <div className="h-50 flex px-30 w-full items-center justify-between absolute left-0 right-0 top-0 rounded-t-md">
//           <button
//             disabled={checkedDiscussions.length == 0 ? true : false}
//             className=" btn h-30 w-93  rounded text-xs"
//           >
//             Create
//           </button>

//           <button
//             className="flex justify-center items-center"
//             onClick={() => setOpenModal(false)}
//           >
//             <Image
//               src="/icons/cancel.svg"
//               alt="cancel"
//               layout="fixed"
//               width="20"
//               height="20"
//             />
//           </button>
//         </div>
//         <div
//           className="  px-30 pb-42
//         pt-55 rounded-l-md w-1/2  flex flex-col "
//         >
//           <div className="flex flex-col flex-grow ">
//             <h6 className="text-primary-darkGreen mb-22 font-medium ">
//               Discussion
//             </h6>

//             <div className="w-full flex-grow flex flex-col">
//               {allDiscussionNames.map((disc, index) => (
//                 <div
//                   key={index}
//                   className="mb-10 flex items-center h-36 w-full px-16 py-9  bg-blue-inputBlue rounded-lg text-sm
//       text-gray-text outline-none"
//                 >
//                   <CheckBox
//                     id={disc.title}
//                     checked={disc.checked}
//                     handleChange={handleCheckDisc}
//                   />
//                   <p className="ml-16 text-black-analText">{disc.title}</p>
//                 </div>
//               ))}
//               {showInput && (
//                 <div className="">
//                   <form action="" onSubmit={handleAddDiscussion}>
//                     <CreateDiscInput
//                       type="text"
//                       placeholder="Input discussion name"
//                       value={discussionName}
//                       setValue={setDiscussionName}
//                     />
//                   </form>
//                 </div>
//               )}

//               {/* {allDiscussionNames.length > 0 && (
//                 <div
//                   className=" mt-10 w-full flex justify-end"
//                   onClick={() => setShowInput("true")}
//                 >
//                   <Image
//                     src="/icons/add_icon_blue.svg"
//                     alt="arrows"
//                     layout="fixed"
//                     width="25"
//                     height="25"
//                   />
//                 </div>
//               )} */}
//               {allDiscussionNames.length === 0 && (
//                 <div className="flex-grow flex justify-center items-center">
//                   <p className=" text-gray-text">Add new discussion</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="h-full border border-green-lightGreen w-2 bg-primary-darkGreen"></div>
//         <div
//           className="
//         pt-50 rounded-l-md w-1/2  vp-980:w-full vp-980:h-full flex flex-col "
//         >
//           {previewSettings ? (
//             <div className=" flex flex-col px-30 flex-grow h-full pb-10">
//               <div className=" mb-27 flex  justify-between items-center ">
//                 <div className="flex items-center ">
//                   <div className="mr-17 flex items-center justify-center">
//                     <Image
//                       src="/icons/settings_icon.svg"
//                       alt="settings"
//                       layout="fixed"
//                       width="16"
//                       height="16"
//                     />
//                   </div>
//                   <h6 className=" font-medium  text-primary-darkGreen">
//                     Discussion settings Preview
//                   </h6>
//                 </div>
//                 <button
//                   className={`btn  px-16 py-4 text-sm`}
//                   disabled={checkedDiscussions.length == 0 ? true : false}
//                   onClick={() => setPreviewSettings(false)}
//                 >
//                   Edit
//                 </button>
//               </div>
//               <div className={`${styles.hiddenScrollbar} h-full`}>
//                 {allDiscussionNames.length == 0 && (
//                   <div className=" flex flex-grow justify-center items-center  h-full">
//                     <p>Select a discusion</p>
//                   </div>
//                 )}

//                 {editorState !== "" && checkedDiscussions.length > 0 && (
//                   <div className="">
//                     <span className=" text-gray-faintGray">Starter prompt</span>
//                     <div className="">
//                       <Editor
//                         editorState={editorState}
//                         onEditorStateChange={onEditorStateChange}
//                         toolbar={""}
//                         toolbarClassName="!hidden"
//                         editorClassName="!text-md !p-0 !m-0"
//                       />
//                     </div>
//                   </div>
//                 )}
//                 {addInspirationToSettings && checkedDiscussions.length > 0 && (
//                   <div className="">
//                     <span className="text-gray-faintGray">
//                       Post Inspirations
//                     </span>
//                     <div className={`${styles.hiddenScrollbar} h-200 mt-10`}>
//                       {AllSpreadInspiration.map((insp, index) => (
//                         <div
//                           key={index}
//                           className=" h-36 px-16 flex items-center mb-5 bg-blue-postInsp rounded-lg "
//                         >
//                           <p className="text-black-postInsp ">
//                             {" "}
//                             {insp.category}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//                 {addScoresToSettings &&
//                   checkedDiscussions.length > 0 &&
//                   selectedScoringOption && (
//                     <div className=" mt-24">
//                       {selectedScoringOption === "rubric" && (
//                         <div className=" mb-24">
//                           <span className="text-gray-faintGray ">
//                             Rubric Scoring
//                           </span>
//                           <div className="mt-6">
//                             <div className="flex justify-between items-center mb-4">
//                               <div className="px-16 bg-blue-postInsp h-35 flex-grow flex items-center rounded-lg">
//                                 <p className="text-black-postInsp ">
//                                   {" "}
//                                   At least five comments
//                                 </p>
//                               </div>
//                               <p className=" ml-40 text-black-postInsp font-medium">
//                                 20
//                               </p>
//                             </div>
//                             <div className="flex justify-between items-center mb-4">
//                               <div className="px-16 bg-blue-postInsp h-35 flex-grow flex items-center rounded-lg">
//                                 <p className="text-black-postInsp ">
//                                   {" "}
//                                   At least five comments
//                                 </p>
//                               </div>
//                               <p className=" ml-40 text-black-postInsp font-medium">
//                                 20
//                               </p>
//                             </div>
//                             <div className="flex justify-between items-center mb-4">
//                               <div className="px-16 bg-blue-postInsp h-35 flex-grow flex items-center rounded-lg">
//                                 <p className="text-black-postInsp ">
//                                   {" "}
//                                   At least five comments
//                                 </p>
//                               </div>
//                               <p className=" ml-40 text-black-postInsp font-medium">
//                                 20
//                               </p>
//                             </div>
//                             <div className="flex justify-between items-center mb-4 mt-10">
//                               <p className=" text-primary-darkGreen font-medium">
//                                 Maximum Score
//                               </p>
//                               <p className=" text-primary-darkGreen font-medium">
//                                 20
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                       {selectedScoringOption === "automatic" && (
//                         <div className="">
//                           <span className="text-gray-faintGray ">
//                             Automatic Scoring
//                           </span>
//                           <div className="mt-6">
//                             <div className="flex justify-between items-center mb-4">
//                               <p className=" text-black-postInsp">
//                                 Instructions
//                               </p>
//                               <p className=" text-black-postInsp font-medium">
//                                 20
//                               </p>
//                             </div>
//                             <div className="flex justify-between items-center mb-4">
//                               <p className=" text-black-postInsp">
//                                 Interactions
//                               </p>
//                               <p className=" text-black-postInsp font-medium">
//                                 20
//                               </p>
//                             </div>
//                             <div className="flex justify-between items-center mb-4">
//                               <p className=" text-black-postInsp">Impact</p>
//                               <p className=" text-black-postInsp font-medium">
//                                 20
//                               </p>
//                             </div>
//                             <div className="flex justify-between items-center mb-4 mt-10">
//                               <p className=" text-primary-darkGreen font-medium">
//                                 Max Score
//                               </p>
//                               <p className=" text-primary-darkGreen font-medium">
//                                 20
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 {addCalendarToSettings && checkedDiscussions.length > 0 && (
//                   <div className=" mt-24">
//                     <span className="text-gray-faintGray">Calendar </span>
//                     <div className="my-12 flex items-center w-full justify-between ">
//                       <p className=" text-primary-darkGreen">open</p>
//                       <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
//                         <p className="text-sm text-black-analText">
//                           {date[0].toLocaleString("en-US", {
//                             weekday: "short",
//                             day: "numeric",
//                             year: "numeric",
//                             month: "long",
//                           })}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="my-12 flex items-center w-full justify-between ">
//                       <p className=" text-primary-darkGreen">Close</p>
//                       <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
//                         <p className="text-sm text-black-analText">
//                           {date[1].toLocaleString("en-US", {
//                             weekday: "short",
//                             day: "numeric",
//                             year: "numeric",
//                             month: "long",
//                           })}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col h-full  flex-grow ">
//               {viewInspirations ? (
//                 <div className="flex-grow flex flex-col">
//                   <AllPostInspirations
//                     activeViewInspiration={activeViewInspiration}
//                     setViewInspirations={setViewInspirations}
//                     setActiveViewInspiration={setActiveViewInspiration}
//                     setActiveInspiration={setActiveInspiration}
//                     activeDetailedInsp={activeDetailedInsp}
//                     setActiveDetailedInsp={setActiveDetailedInsp}
//                     showDetailedInsp={showDetailedInsp}
//                     setShowDetailedInsp={setShowDetailedInsp}
//                   />
//                   <AllRespondingInspiration
//                     activeViewInspiration={activeViewInspiration}
//                     setViewInspirations={setViewInspirations}
//                     setActiveViewInspiration={setActiveViewInspiration}
//                     setActiveInspiration={setActiveInspiration}
//                     activeDetailedInsp={activeDetailedInsp}
//                     setActiveDetailedInsp={setActiveDetailedInsp}
//                     showDetailedInsp={showDetailedInsp}
//                     setShowDetailedInsp={setShowDetailedInsp}
//                   />
//                   <AllSynthInspirations
//                     activeViewInspiration={activeViewInspiration}
//                     setViewInspirations={setViewInspirations}
//                     setActiveViewInspiration={setActiveViewInspiration}
//                     setActiveInspiration={setActiveInspiration}
//                     activeDetailedInsp={activeDetailedInsp}
//                     setActiveDetailedInsp={setActiveDetailedInsp}
//                     showDetailedInsp={showDetailedInsp}
//                     setShowDetailedInsp={setShowDetailedInsp}
//                   />
//                   {activeViewInspiration === "Calendar" && (
//                     <CalendarTemp
//                       date={date}
//                       setDate={setDate}
//                       setViewInspirations={setViewInspirations}
//                       setActiveViewInspiration={setActiveViewInspiration}
//                       setActiveSettings={setActiveSettings}
//                     />
//                   )}

//                   {activeViewInspiration === "SavedSettings" && (
//                     <SavedSettingsTemplate
//                       setViewInspirations={setViewInspirations}
//                       setActiveViewInspiration={setActiveViewInspiration}
//                     />
//                   )}
//                   {activeViewInspiration === "NewScoresSettings" && (
//                     <NewSettings
//                       setViewInspirations={setViewInspirations}
//                       setActiveViewInspiration={setActiveViewInspiration}
//                       setSelectedScoringOption={setSelectedScoringOption}
//                       selectedScoringOption={selectedScoringOption}
//                     />
//                   )}
//                 </div>
//               ) : (
//                 <div className="flex flex-col h-full ">
//                   <div
//                     className="px-30  flex items-center cursor-pointer mb-23"
//                     onClick={() => setPreviewSettings(true)}
//                   >
//                     <div className="flex justify-center items-center">
//                       <Image
//                         src="/icons/arrow_left_green.svg"
//                         alt="back"
//                         layout="fixed"
//                         width="16"
//                         height="16"
//                       />
//                     </div>
//                     <h6 className="ml-16 text-gray-faintGray">Close edit</h6>
//                   </div>
//                   <div
//                     className={`${styles.hiddenScrollbar} w-full  mb-19 px-30  overflow-x-scroll `}
//                   >
//                     <div className="flex items-center  gap-8   w-500 ">
//                       <button
//                         className={`${
//                           activeSetting === "StarterPrompt"
//                             ? " text-primary-darkGreen  font-medium"
//                             : " text-gray-faintGray"
//                         }  text-xs`}
//                         onClick={() => {
//                           setActiveSettings("StarterPrompt");
//                         }}
//                       >
//                         Starter prompt
//                       </button>
//                       <div className="w-25 border border-other-disabled"></div>
//                       <button
//                         className={`${
//                           activeSetting === "postInspiration"
//                             ? " text-primary-darkGreen  font-medium"
//                             : " text-gray-faintGray"
//                         }  text-xs`}
//                         onClick={() => {
//                           setActiveSettings("postInspiration");
//                         }}
//                       >
//                         Post Inspiration
//                       </button>
//                       <div className="w-25 border border-other-disabled"></div>
//                       <button
//                         className={`${
//                           activeSetting === "Scores"
//                             ? " text-primary-darkGreen  font-medium"
//                             : " text-gray-faintGray"
//                         }  text-xs`}
//                         onClick={() => {
//                           setActiveSettings("Scores");
//                         }}
//                       >
//                         Scores
//                       </button>
//                       <div className="w-25 border border-other-disabled"></div>
//                       <button
//                         className={`${
//                           activeSetting === "Calendar"
//                             ? " text-primary-darkGreen  font-medium"
//                             : " text-gray-faintGray"
//                         }  text-xs`}
//                         onClick={() => {
//                           setActiveSettings("Calendar");
//                         }}
//                       >
//                         Calendar
//                       </button>
//                     </div>
//                   </div>
//                   {activeSetting === "StarterPrompt" && (
//                     <StarterPrompt
//                       setActiveSettings={setActiveSettings}
//                       editorState={editorState}
//                       setEditorState={setEditorState}
//                       onEditorStateChange={onEditorStateChange}
//                     />
//                   )}
//                   {activeSetting === "postInspiration" && (
//                     <PostInspiration
//                       setActiveSettings={setActiveSettings}
//                       setViewInspirations={setViewInspirations}
//                       setActiveViewInspiration={setActiveViewInspiration}
//                       activeInspiration={activeInspiration}
//                       setActiveInspiration={setActiveInspiration}
//                       activeDetailedInsp={activeDetailedInsp}
//                       setActiveDetailedInsp={setActiveDetailedInsp}
//                       showDetailedInsp={showDetailedInsp}
//                       setShowDetailedInsp={setShowDetailedInsp}
//                       addInspirationToSettings={addInspirationToSettings}
//                       setAddInspirationToSettings={setAddInspirationToSettings}
//                     />
//                   )}
//                   {activeSetting === "Scores" && (
//                     <ScoreSettings
//                       setActiveSettings={setActiveSettings}
//                       setViewInspirations={setViewInspirations}
//                       setActiveViewInspiration={setActiveViewInspiration}
//                       addScoresToSettings={addScoresToSettings}
//                       setAddScoresToSettings={setAddScoresToSettings}
//                     />
//                   )}
//                   {activeSetting === "Calendar" && (
//                     <Calendar
//                       date={date}
//                       setActiveSettings={setActiveSettings}
//                       setViewInspirations={setViewInspirations}
//                       setActiveViewInspiration={setActiveViewInspiration}
//                       addCalendarToSettings={addCalendarToSettings}
//                       setAddCalendarToSettings={setAddCalendarToSettings}
//                       setPreviewSettings={setPreviewSettings}
//                     />
//                   )}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateDiscussions;
