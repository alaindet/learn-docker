# Deploy a multi container app to AWS ECS

## About networking
- If two containers run in the same task, they run on the same machine hence you can use `localhost` for cross-container communication
