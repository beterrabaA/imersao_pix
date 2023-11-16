import { Transaction } from '@/models'
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

interface BankAccountDashboardProps {
  params: { bankAccountId: string }
  searchParams: { page: string; per_page: string }
}

export async function getTransactions(
  bankAccountId: string,
): Promise<Transaction[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/bank-accounts/${bankAccountId}/transactions`,
    {
      next: {
        revalidate: 10,
        tags: [`bank-accounts/${bankAccountId}`],
      },
    },
  )
  return response.json()
}

const page = async ({ params, searchParams }: BankAccountDashboardProps) => {
  const transactions = await getTransactions(params.bankAccountId)
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12} lg={6}>
        saldo
      </Grid2>
      <Grid2 xs={12} lg={6}>
        nova transferencia
      </Grid2>
      <Grid2 xs={12}>
        <Typography variant="h5">Últimos lançamentos</Typography>
      </Grid2>
    </Grid2>
  )
}

export default page
