import openai

openai.api_key = "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"

def chat_with_gpt(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break
    print("Bot:", chat_with_gpt(user_input))
