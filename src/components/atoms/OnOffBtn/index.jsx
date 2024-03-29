import { Button } from "@mantine/core";
const OnOffBtn = ({ text, size, onClick, value }) => {
  return (
    <Button.Group>
      <Button
        value={value}
        variant={value ? "filled" : "default"}
        size={size}
        radius={8}
        onClick={onClick}
      >
        {text.on}
      </Button>
      <Button
        value={value}
        variant={value ? "default" : "filled"}
        size={size}
        radius={8}
        onClick={onClick}
      >
        {text.off}
      </Button>
    </Button.Group>
  );
};

export default OnOffBtn;
