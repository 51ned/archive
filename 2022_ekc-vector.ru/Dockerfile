# Install dependencies only when needed
FROM node:16-alpine AS deps

RUN apk add libc6-compat --no-cache

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci


# Rebuild the source code only when needed
FROM node:16-alpine AS build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Add build time envs
ARG CONTENTFUL_ACCESS_ID
ENV CONTENTFUL_ACCESS_ID $CONTENTFUL_ACCESS_ID

ARG CONTENTFUL_SPACE_ID
ENV CONTENTFUL_SPACE_ID $CONTENTFUL_SPACE_ID

ARG EMAIL_HOST
ENV EMAIL_HOST $EMAIL_HOST

ARG EMAIL_PASS
ENV EMAIL_PASS $EMAIL_PASS

ARG EMAIL_PORT
ENV EMAIL_PORT $EMAIL_PORT

ARG EMAIL_RECIPIENT
ENV EMAIL_RECIPIENT $EMAIL_RECIPIENT

ARG EMAIL_USER
ENV EMAIL_USER $EMAIL_USER

RUN npm run build


# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 80/tcp
EXPOSE 80/udp


# Lift on
CMD ["node", "server.js"]
