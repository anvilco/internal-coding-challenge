# Anvil Onsite Interview 👋

This repo contains a few things:

- `scripts/get-pdfs.js` - the script you'll be editing and running to get PDFs back from Anvil.
- `data/templates.json` - the data you will use to locate the PDF template within Anvil, and the data to fill on each PDF.
- various tools/infrastructure to run the script. How to use it below!

## The task

You are given an array of data that represents all of the information to fill on X number of PDFs. There is one field on each object, `formsToFill`, that is an array of PDF template IDs (Cast EIDs) that is used to perform the PDF filling using Anvil's Node.js client. The rest of the data on each object is the actual data to be filled onto the PDF.

Your job is to write a script to do 3 things, in no particular order:
1. fill all PDFs with all people’s data? All the resulting PDFs should be in `pdfs`, with the title of the form. E.g. for the Acord 1, it should be `pdfs/Acord 1.pdf`
2. fill only USPS 1583? The resulting PDF should also be in `pdfs`, but the title is the EID, e.g. `pdfs/<eid>.pdf`
3. How to sort all forms in order of prevalance (appears most/least often)? Let's have this output in the format: 

```json
{
    "eid": <amount of times referenced>,
    "anotherEid": <amount of times referenced>
}
```

When you're ready to start coding, ask for the API key to interact with Anvil from your script.

## Important notes

- The first 5-10 min will be given so you can formulate your approach
- The next ~30-40 min will be for implementation
- The last 10-20 min will be for review
- You have lodash available, if you need any utility functions
- This exercise is _not_ about writing the best script ever. Take your time to understand the problem and make sure to communicate your decisions clearly. 

If writing JavaScript is a challenge today, write out pseudo-code and still think of cases to handle! We are interested in how you think and how you approach solving problems, not if you remember the specific encantation on how to use JavaScript.

