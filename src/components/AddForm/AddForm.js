import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  width: 400px;
  padding: 25px;
  line-height: 2.5;
`;
const MarginLabel = styled.label`
  margin-right: 20px;
`;

const AddForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { type, name, amount, category } = e.target.elements;
    const data = {
      type: type.value,
      name: name.value,
      amount: amount.value,
      category: category.value
    };
    console.log("data: ", data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <input id="expense-radio" type="radio" name="type" value="Expense" />
        <MarginLabel htmlFor="expense-radio" >Expense</MarginLabel>
        <input id="income-radio" type="radio" name="type" value="Income" />
        <label htmlFor="income-radio" >Income</label>
      </div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="amount">Amount:</label>
      <input id="amount" type="number" step="0.01" name="amount" />
      <div>
        <MarginLabel htmlFor="category">Category:</MarginLabel>
        <select id="category" name="category">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <button type="submit">Add:</button>
    </FormWrapper>
  );
};

export default AddForm;