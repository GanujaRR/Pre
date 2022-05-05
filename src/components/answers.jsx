import React from 'react';
import Table from "./tables/table";

const Answers = (props) => {
   return (
    <Table
           markedAnswer={props.markedAnswer}
           checkAnswer={props.checkAnswer}
           answers={props.currentAnswers}
        >
       </Table>

   )
};

export default Answers;
