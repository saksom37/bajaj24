
exports.handleData = async(req,res) => {
    try{
        const {data} = req.body

        const even_numbers = data.filter(number => {
            number = parseInt(number)
            return typeof number === 'number' && number % 2 === 0 && !isNaN(number)
        })

        const odd_numbers = data.filter(number => {
            number = parseInt(number)
            return typeof number === 'number' && number % 2 !== 0 && !isNaN(number)
        })

        const alphabhets = data.filter(alpha => {
            alpha = parseInt(alpha)

            if(typeof alpha === 'string' && isNaN(alpha)){
                return true
            }else{
                return false;
            }

        }).map(alpha => alpha.toUpperCase())

        return res.status(200).json({
           "is_success": true,
            "user_id": "john_doe_17091999", 
            "email": "john@xyz.com",
            "roll_number": "ABD123",
            "odd_numbers": odd_numbers,
            "even_numbers": even_numbers,
            "alphabets": alphabhets,
            })
        
    }catch(err){
        return res.status(500).json({
            is_succes: false,
            error: err.message
        })
    }
}
