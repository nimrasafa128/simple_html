pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Install') {
            steps {
                echo 'No dependencies needed for simple HTML project'
            }
        }

        stage('Deploy') {
            steps {
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }
}
