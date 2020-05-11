# Start with Node v12 on Linux (Debian Slim)
FROM node:12-slim

# Remove yarn (comes pre-installed on node image and it's not needed/causes problems when used alongside npm)
RUN rm -rf /opt/yarn-* \
  && rm -f /usr/local/bin/yarn \
  && rm -f /usr/local/bin/yarnpkg \
  && unset YARN_VERSION

# Set NODE_ENV environment variable to "development"
ENV NODE_ENV=development

# Recommend that ports 3000 and 9229 get published when running a container based on this image
EXPOSE 3000
EXPOSE 9229

# Set current directory to /prototype-react/client (easier than needing to cd into the folder every time)
WORKDIR /prototype-react/client

# By default, open bash shell for commands
CMD ["bash"]