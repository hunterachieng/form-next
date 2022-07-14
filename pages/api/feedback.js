function feedbackHandler (req, res){
    const body = req.body;
    if(!body.firstName){
        return res.status(500).json({message: `Feedback for user ${body.firstName} was not found!`})
    }
    res.status(200).json({message: 'Feedback successfully recorded!!'})
}