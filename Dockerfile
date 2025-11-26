FROM node:18-alpine

WORKDIR /usr/src/app

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
