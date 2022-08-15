import styled from "styled-components";

export const Selector = styled.select`
  box-sizing: border-box;
  width: 100%; // width (574px)
  aspect-ratio: 9.25/1; // height
  padding: 25px;

  color: ${(props) => (props.selected ? "" : "var(--bg-color)")};

  border: none;
  border-radius: 9px;
  box-shadow: var(--box-shadow);

  font-size: 1em;
  ::placeholder {
    opacity: 50%;
  }
`;

{
  /* <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select> */
}
