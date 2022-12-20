import { profileAirtable, minifyItems } from "../../utils/airtable";

const handler = async (req, res) => {
  const fields = req.body;
  try {
    const newRecords = await profileAirtable.create([
      {
        fields,
      },
    ]);
    res.status(200).json(minifyItems(newRecords[0]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};

export default handler;
