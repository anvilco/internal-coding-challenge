# Anvil Onsite Interview 👋

This repo contains a few things:

- `scripts/get-pdfs.js` - the script you'll edit and run to get PDFs back from Anvil.
- `data/templates.json` - the data you will use to locate the PDF template within Anvil, and the data to fill on each PDF.
- various tools/infrastructure to run the script. How to use it below!

--- 

## The Task

You are given an array of objects containing all the data required to fill **X number of PDFs**.
Each object includes:

* `formsToFill`: an array of PDF template IDs (Cast EIDs) used for filling PDFs via Anvil's Node.js client.
* Other fields: actual data to be filled into the PDF.

Your job is to write a script that performs **three tasks** (order does not matter):

1. **Fill all PDFs with all people’s data**

   * Output: All generated PDFs should go in the `pdfs` folder.
   * File naming: Use the form title.
     Example: For *Acord 1*, output as `pdfs/Acord 1.pdf`.

2. **Fill only USPS 1583**

   * Output: Place the result in `pdfs` as well.
   * File naming: Use the EID.
     Example: `pdfs/<eid>.pdf`.

3. **Sort all forms by prevalence**

   * Output format:

     ```json
     {
       "eid": <number of references>,
       "anotherEid": <number of references>
     }
     ```

When you're ready to start coding, request an API key to interact with Anvil from your script.

---

## Important Notes

* First **5–10 min**: Formulate your approach
* Next **30–40 min**: Implementation
* Last **10–20 min**: Review
* Lodash is available for utility functions.
* This exercise is _not_ about writing the best script ever.
  Focus on understanding the problem and communicating your decisions clearly.

If JavaScript feels challenging today, write pseudocode and consider edge cases!
We care about your **thinking process** more than perfect syntax.

