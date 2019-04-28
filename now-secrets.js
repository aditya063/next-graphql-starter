`
https://zeit.co/docs/v2/deployments/environment-variables-and-secrets/?query=secret#securing-environment-variables-using-secrets

Fill in the info and run each line in your terminal in the project root

View secrets using 'now secrets ls'

To add a new secret:
1. Add to .env
2. Add to .env.example
3. Add to now.json
4. Add to this list and run the command

-- Frontend --
now secret add DEV_GRAPHQL_ENDPOINT ""
now secret add PROD_GRAPHQL_ENDPOINT ""

-- Backend --
now secret add PORT ""
now secret add DEV_FRONTEND_URL ""
now secret add PROD_FRONTEND_URL ""
now secret add JWT_SECRET ""

## prisma
now secret add PRISMA_ENDPOINT ""
now secret add PRISMA_SECRET ""
now secret add PRISMA_MANAGEMENT_API_SECRET ""

## mailtrap.io
now secret add MAIL_HOST ""
now secret add MAIL_PORT ""
now secret add MAIL_USER ""
now secret add MAIL_PASS ""
`;
