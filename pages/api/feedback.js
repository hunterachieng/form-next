function feedbackHandler (req, res){
    const body = req.body;
    if(!body.firstName|| !body.secondName|| !body.feedback){
        return res.status(500).json({message: `Feedback for user ${body.firstName} was not found!`})
    }
    res.status(200).json({message: `Feedback:{
        first Name:${body.firstName},
        second Name: ${body.secondName},
        feedback: ${body.feedback}
    }`})
}

export default feedbackHandler;