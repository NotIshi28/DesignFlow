type ProjectFormProps = {
	title: string,
	description: string,
	image: string,
	liveSiteUrl: string,
	githubUrl: string,
    behanceUrl: string
    dribbbleUrl: string
	category: string,
}

type UserFormProps = {
	name: string
	description: string
	githubUrl: string
    behanceUrl: string
    dribbbleUrl: string
	linkedinUrl: string
}
export const createProjectMutation = (form: ProjectFormProps, creatorId: string) => {
	return `mutation {
        projectCreate(input: { title: "${form.title}", description: "${form.description}", image: "${form.image}", liveSiteUrl: "${form.liveSiteUrl}", githubUrl: "${form.githubUrl}", behanceUrl: "${form.behanceUrl}", dribbbleUrl: "${form.dribbbleUrl}", category: "${form.category}", createdBy: { link: "${creatorId}" } 
		}) {
			project {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}`
}

export const updateProjectMutation = (form: ProjectFormProps, projectId: string) => {
	return `mutation {
		projectUpdate(by: {id: "${projectId}"}, input:  { title: "${form.title}", description: "${form.description}", image: "${form.image}", liveSiteUrl: "${form.liveSiteUrl}", githubUrl: "${form.githubUrl}", behanceUrl: "${form.behanceUrl}", dribbbleUrl: "${form.dribbbleUrl}", category: "${form.category}" }) {
			project {
			  category
			  description
			  title
			  liveSiteUrl
			  image
			  githubUrl
              behanceUrl
              dribbbleUrl
			  likes
			  id
			  createdBy {
				name
				id
				email
			  }
			}
		  }
	}`
}

export const deleteProjectMutation = (projectId: string) => {
	return `mutation {
		projectDelete(by: {id: "${projectId}"}) {
			deletedId
		  }
	}`
}

export const createUserMutation = (name: string, email: string, avatarUrl: string) => {
	return `mutation {
        userCreate(input: { name: "${name}", email: "${email}", avatarUrl: "${avatarUrl}" }) {
			user {
				id
				name
				email
				avatarUrl
			}
		}
	}`
}

export const updateUserMutation = (form: UserFormProps, userId: string) => {
	return `mutation {
		userUpdate(by: {id: "${userId}"}, input: { name: "${form.name}", description: "${form.description}", githubUrl: "${form.githubUrl}", behanceUrl: "${form.behanceUrl}", dribbbleUrl: "${form.dribbbleUrl}", linkedinUrl: "${form.linkedinUrl}" }) {
			user {
			  githubUrl
              behanceUrl
              dribbbleUrl
			  linkedinUrl
			  name
			  email
			  id
			}
		  }
	}`
}