import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.json({ status: 'success', message: 'sfsfonsofie' })
})

const PORT = 80 || process.env.PORT

app.listen(PORT, () => console.log(`  ${PORT}  `))