import { fauna } from "../../services/faunadb"
import { query as q } from 'faunadb'
import { getSession } from 'next-auth/client'

import { NextApiRequest, NextApiResponse } from "next"

interface Cases {
  data: {
    ref: {
      id: string
    },
    data: {
      userId: { id: string },
      caseInfo: {
        title: string,
        description: string,
        price: string
      }
    }
  }[]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'GET') {

    try {
  
      const session = await getSession({req})
      const userEmail = session?.user.email
  
      const userRef = await fauna.query(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index('user_by_email'),
              q.Casefold(userEmail)//pegar o email dinamicamente
            )
          )
        )
      )
  
      const faunaData = await fauna.query<Cases>(
        q.Map(
          q.Paginate(
            q.Match(
              q.Index('cases_by_userID'),
              q.Casefold(userRef)
            ) 
          ),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      )

      const cases = faunaData.data.map(caseItem => {
        return {
          id: caseItem.ref.id,
          title: caseItem.data.caseInfo.title,
          description: caseItem.data.caseInfo.description,
          price: caseItem.data.caseInfo.price,
        }
      })

      return res.status(200).json({cases})

    } catch (error) {
      console.log('ERRO', error)
      return res.status(500).json({message: 'Error on GET cases'})

    }

  } else if (req.method == 'POST') {
    try {
      const userRef = await fauna.query(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index('user_by_email'),
              q.Casefold(req.body.user_email)
            )
          )
        )
      )
              
      const caseData = {
        userID: userRef,
        caseInfo: req.body.case
      }

      await fauna.query(
        q.Create(
          q.Collection('cases'),
          {
            data: caseData
          }
        )
      )
  
      return res.status(200).json({message: 'Created case sucessfuly'})
      
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({message: 'Error on create case'})
    }

  } else if (req.method == 'DELETE') {
    try {

      console.log(req.body)

      const teste = await fauna.query(
        q.Delete(q.Ref(q.Collection('cases'), req.body.id))
      )

      console.log(teste)

      return res.status(200).json({message: 'Deleted case sucessfuly'})

    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Error on delete case'})
    }
  } else {
    res.setHeader('Allow', 'POST/GET')
    res.status(405).json('Method not allowed')
  }
}